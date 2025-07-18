



function createCalculator(size){
    size = 15;
    for(let rowNum = 0; rowNum < size; rowNum++){
        const row = document.createElement("div");
        row.classList.add('row');        

        for(let colNum = 0; colNum < size; colNum++){
            const col = document.createElement("div");
            col.classList.add('col');
            row.appendChild(col);

            col.addEventListener('mouseenter', () => {
                console.log("hola");
                
            })
            col.addEventListener('click', () => {
                console.log("adios");
                
            })
        }
        gridDiv.appendChild(row);        
    }
}