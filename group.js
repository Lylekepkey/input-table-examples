var titles  = []
    var titleInput  = document.getElementById("title")
    var titleInput2  = document.getElementById("titles")
    var messageBox  = document.getElementById("display")
    var messageBox2 = document.getElementById("display-2")
    

    
    function Allow(){
        if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="") {
            user.title.value="";
            alert("Please Enter only alphabets")
        }
    }
    function Allow(){
        if (!user.titles.value.match(/[a-zA-Z]$/) && user.titles.value !="") {
            user.titles.value="";
            alert("Please Enter only alphabets")
        }
    }
    
    function insert () {
        titles.push(titleInput.value)
        clearAndShow()
    }
    function insert () {
        titles.push(titleInput2.value)
        clearAndShow()
    }
    
    function clearAndShow () {
        titleInput.value = "";
        titleInput2
        messageBox.innerText = "";
        messageBox.innerText += titles.join(" ") ;
        messageBox2.innerHText += titles.join(" ");
    }