   // Initialize QR scanner
        function domReady(fn) {
            if (document.readyState === "complete" || document.readyState === "interactive") {
                setTimeout(fn, 1);
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }

        domReady(function () {
            function onScanSuccess(decodeText, decodeResult) {
                document.getElementById("messageDisplay").textContent = decodeText;
            }

            const htmlscanner = new Html5QrcodeScanner(
                "my-qr-reader",
                { fps: 10, qrbox: 250 }
            );
            htmlscanner.render(onScanSuccess);
        });
        