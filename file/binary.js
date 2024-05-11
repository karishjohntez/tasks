  function readFile(file, callback){
            const reader = new FileReader();
            reader.onload = function(event) {
                const text= event.target.result;
                callback(text); }
                reader.readAsText(file) };
     function removeNumbersFromFileF(fileF, fileG){
    readFile(fileF, function(textF) {
    readFile(fileG, function(textG){
        const numbersF= textF.split(' ');
        const numbersG=textG.split(' ');
        const filteredNumbersF= numbersF.filter(num=> !numbersG.includes(num))
        const filteredTextF= filteredNumbersF.join(' ');
        const blob =new Blob([filteredTextF], {type: 'text/plain'});
               const link= document.createElement('a')
                link.href= URL.createObjectURL(blob);
                link.download= 'modified_f.txt'
                link.textContent = "Download Modified File F"
                document.body. appendChild(link)
    })
    })
    }
     const binaryfile=document.getElementById("fileF");
     const binaryfile2=document.getElementById("fileG");

     binaryfile.addEventListener("change", (event)=>{
        const fileF=event.target.files[0];
        binaryfile2.addEventListener("change", (event)=>{
            const fileG=event.target.files[0];
            removeNumbersFromFileF(fileF, fileG)
        })
     })

    