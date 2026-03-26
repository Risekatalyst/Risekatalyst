function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const apiKey = context.env.RESEND_API_KEY;
    const toEmail = context.env.CONTACT_TO_EMAIL;
    const fromEmail = context.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return Response.json(
        { error: "Server email settings are missing." },
        { status: 500 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New website inquiry from ${name}`,
        html,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return Response.json(
        { error: resendData?.message || resendData?.error || "Email send failed." },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    return Response.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
