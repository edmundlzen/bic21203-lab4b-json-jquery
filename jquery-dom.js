// (a) document.getElementById("myElement").textContent = "Modified Text";
$("#myElement").text("Modified Text");

// (b) document.querySelector("#myDIV").classList.add("myStyle");
$("#myDIV").addClass("myStyle");

// (c) document.getElementById("myButton").addEventListener("click", () => alert("Button clicked!"));
$("#myButton").on("click", () => alert("Button clicked!"));
