document.getElementById("uploadButton").addEventListener("click", async () => {
    const fileInput = document.getElementById("pdfFile");
    const statusMessage = document.getElementById("statusMessage");

    if (fileInput.files.length === 0) {
        statusMessage.innerText = "Please select a PDF file.";
        return;
    }

    const formData = new FormData();
    formData.append("pdfFile", fileInput.files[0]);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            statusMessage.innerText = "File uploaded successfully!";
        } else {
            const errorText = await response.text();
            statusMessage.innerText = "Upload failed: " + errorText;
        }
    } catch (error) {
        statusMessage.innerText = "Error: " + error.message;
    }
});
