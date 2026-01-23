const redirectScript = `
  (function () {
    var host = window.location.hostname;
    var target = "/w";

    if (host === "help.kyber.gg" || host == 'localhost') {
      target = "/w";
    } else if (host === "docs.kyber.gg") {
      target = "/g";
    }

    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  })();
`;

export function RedirectByHost() {
    return (
        <>
            <script
                dangerouslySetInnerHTML={{ __html: redirectScript }}
            />
        </>
    );
}
