let data = [];
let form = document.getElementById('form');

function insert() 
{
    if ( document.getElementById('pilha').checked || document.getElementById('lista').checked ) 
    {
        form.addEventListener('submit', (e) => 
        {
            let place = document.getElementById('place').value;
            if (document.getElementById('pilha').checked) 
            {
                document.getElementById('lista').disabled = true;
                data.unshift(place);
            }
            else if (document.getElementById('lista').checked) 
            {
                document.getElementById('pilha').disabled = true;
                data.push(place);
            }
            body(data);
            e.preventDefault()
            form.reset();
        });
    }
    else 
    {
        alert('Selecione uma opção');
    }
}


function clean() 
{
    data.splice(0, data.length);
    body('');
    document.getElementById('pilha').disabled = false;
    document.getElementById('lista').disabled = false;
    form.reset();
}

function body(place) 
{
    let tablebody = document.getElementById('tablebody')
    tablebody.innerText = '';

    for (const element of place) 
    {
        let tr = tablebody.insertRow();
        let dadostd = tr.insertCell();
        dadostd.innerText = element;
    }
}