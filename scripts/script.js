function togglesidebar(){
    const sidebar = document.getElementById('sidebar');
    if(sidebar.style.left = '-400px'){
        sidebar.style.left = '0px';
    }
    else{
        sidebar.style.left = '0px';
    }
    const openbtn = document.getElementById('openbtn');
    openbtn.style.left = '-400px';
}

function togglesidebarclose(){
     if(sidebar.style.left = '0px'){
         sidebar.style.left = '-400px';
     }
    else{
        sidebar.style.left = '-400px';
    }
    openbtn.style.left = '40px';
}
