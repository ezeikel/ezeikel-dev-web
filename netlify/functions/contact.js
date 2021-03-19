const postmark = require("postmark");

exports.handler = async (event) => {
  const payload = JSON.parse(event.body);
  const { fullName, email, message } = payload;

  // Send an email:
  const client = new postmark.ServerClient(process.env.POSTMARK_TOKEN);

  try {
    client.sendEmail({
      From: "sender@example.org",
      To: "sender@example.org",
      Subject: "Hello from Postmark",
      HtmlBody: "<strong>Hello</strong> dear Postmark user.",
      TextBody: "Hello from Postmark!",
      MessageStream: "outbound",
    });

    return {
      statusCode: 200,
      body: "Email sent",
    };
  } catch (error) {
    const statusCode = typeof error.code === "number" ? error.code : 500;

    return {
      statusCode,
      body: error.message,
    };
  }
};
