async function fetchdata(){
    try{
        const rollno=document.getElementById("rollnoget").value;
        const response=await fetch(`https://tpcconfessions.onrender.com/api/getConfession?roll_no=${rollno}`);
        if(!response.ok)
            {
                throw new Error("Cannot find confession for this roll no");
            }
            else{
            const data= await response.json();
            const display=document.getElementById("dispConf");
            for(let i=0;i<data.length;i++)
            {
            display.innerHTML="<br\>"+`Recent Confession: ${data[i].confession}`;
            console.log(data);
            // display.innerHTML="";
            }
        }
    }
    catch(error)
    {
        console.error(error);
    }
}


function postdata(){
        const rollno1=document.getElementById("rollnopost").value;
        const confession=document.getElementById("confession").value;
        const Url = `https://tpcconfessions.onrender.com/api/postConfession`;
        const post = {
            roll_no: rollno1,
            confession: confession,
          };
          fetch(Url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  `Failed to post confession. Status code: ${response.status}`
                );
              }
              return response.json();
            })
            .then((data) => {
              document.getElementById("dispConf").innerText =
                "Confession has been posted successfully!";
                document.getElementById("dispConf").style.backgroundColor="#dff0d8";
              
              console.log(data);
            })
            .catch((error) => {
              document.getElementById("dispConf").innerText = `Error: ${error.message}`;
              document.getElementById("dispConf").style.backgroundColor="#f2dede";
              
              console.error("Error:", error);
            });
        }
