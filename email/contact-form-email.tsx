import React from "react";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <html dir="ltr" lang="en">
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
        <meta name="x-apple-disable-message-reformatting" />
      </head>
      <body
        style={{
          backgroundColor: "#f3f4f6",
          color: "#000000",
          fontFamily: FONT_FAMILY,
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            display: "none",
            overflow: "hidden",
            lineHeight: "1px",
            opacity: 0,
            maxHeight: 0,
            maxWidth: 0,
          }}
          data-skip-in-text="true"
        >
          New Message from your portfolio site
        </div>
        <table
          align="center"
          width="100%"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <tbody>
            <tr style={{ width: "100%" }}>
              <td>
                <table
                  align="center"
                  width="100%"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  role="presentation"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "6px",
                    fontFamily: FONT_FAMILY,
                    marginTop: "40px",
                    marginBottom: "40px",
                    padding: "40px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "1.3",
                            margin: "0 0 16px 0",
                            color: "#111827",
                          }}
                        >
                          You received the following message from the contact
                          form
                        </h1>
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: "24px",
                            marginTop: "16px",
                            marginBottom: "16px",
                            whiteSpace: "pre-wrap",
                            color: "#374151",
                          }}
                        >
                          {message}
                        </p>
                        <hr
                          style={{
                            width: "100%",
                            border: "none",
                            borderTop: "1px solid #eaeaea",
                            margin: "24px 0",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: "24px",
                            marginTop: "16px",
                            marginBottom: "0",
                            color: "#6b7280",
                          }}
                        >
                          The sender&apos;s email is: {senderEmail}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
