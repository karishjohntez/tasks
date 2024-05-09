 //browsing from the user files
 let fileInput = document.getElementById("fileInput");
 let downloadedwords = document.getElementById("downloadedwords");
 const results=document.getElementById("results")
 const filteredArr = [];
 fileInput.addEventListener("change", (event) => {
     const file = event.target.files[0];
     const reader = new FileReader();
     
     reader.addEventListener("load", (event) => {
         const filecontents = event.target.result.split(" ");
         if (filecontents.some((word) => word.includes("b"))) {
             const filteredwords = filecontents.filter((word) => word.includes("b"));

             filteredArr.push(...filteredwords);
             console.log(filteredArr);
             let longestWord = "";
             for (const word of filteredArr) {
                 if (word.length > longestWord.length) {
                     longestWord = word;
                     results.innerHTML=`<strong>The longest word with letter 'b':</strong>  <mark> ${longestWord}</mark> `;
                 }
             }
             // blob for browsed file
             const blob = new Blob([filteredArr.join("\n")], { type: "text/plain" });
             console.log(blob);
             const fileDownload = new File([blob], "words.txt", { type: "text/plain" });
             link.href = URL.createObjectURL(blob);
             link.textContent = 'Download Words Starting with "b"';
        } else {
             results.innerHTML="<mark>No word with letter ' b '</mark>";
        }
     });

     reader.readAsText(file);
 });
  //blob for downloaded file
  const Dblob = new Blob(
                 [
                     "Documentary filmmaking is a cinematic style dating back to the earliest days of film.While\n Wikipedia can define its most basic definition as “a nonfictional motion picture intended to document\n some aspects of realityprimarily for the purposes of instruction or maintaining a historical record,”\n beginning the style has become a catch-all for both certain filmmaking styles as well as a noble cinematic pursuit of truth.",
                 ],
                 { type: "text/plain" }
             );
             downloadedwords.href=URL.createObjectURL(Dblob);
           // resettin
 const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    function resetFunction() {
        fileInput.value = "";
        results.innerHTML = "";
        link.innerHTML = "";
    }
    resetFunction();
});


