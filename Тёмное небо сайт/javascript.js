"use sctrict";


function changeMembers() {
  let bt2 = document.getElementById("bt2");
  let bt1 = document.getElementById("bt1");
  let bt3 = document.getElementById("bt3");
  let c = document.querySelector('.tm_table');
    let x = document.querySelector('.tm_table_2');
    let a = document.querySelector('.tm_table_3');
    if (c.style.display == "block"){
    c.style.display = "none";
	  x.style.display = "block";
    bt2.classList.add("tm_list_active");
    bt1.classList.remove("tm_list_active");
    bt3.classList.remove("tm_list_active");
  }
    else if (a.style.display == "block") {
      a.style.display = "none";
      x.style.display = "block";
      bt2.classList.add("tm_list_active");
      bt1.classList.remove("tm_list_active");
      bt3.classList.remove("tm_list_active");
}
    };
    function changeMembers1() {
      let bt2 = document.getElementById("bt2");
      let bt1 = document.getElementById("bt1");
      let bt3 = document.getElementById("bt3");
        let x = document.querySelector('.tm_table_2');
        let c = document.querySelector('.tm_table');
        let a = document.querySelector('.tm_table_3');
        if (x.style.display == "block"){
        x.style.display = "none";
    	  c.style.display = "block";
        bt1.classList.add("tm_list_active");
        bt2.classList.remove("tm_list_active");
        bt3.classList.remove("tm_list_active");
      }
        else if (a.style.display == "block") {
          a.style.display = "none";
          c.style.display = "block";
          bt1.classList.add("tm_list_active");
          bt2.classList.remove("tm_list_active");
          bt3.classList.remove("tm_list_active");
     }
        };
        function changeMembers2() {
          let bt2 = document.getElementById("bt2");
          let bt1 = document.getElementById("bt1");
          let bt3 = document.getElementById("bt3");
            let x = document.querySelector('.tm_table_2');
            let c = document.querySelector('.tm_table');
            let a = document.querySelector('.tm_table_3');
            if (x.style.display == "block"){
            x.style.display = "none";
        	  a.style.display = "block";
            bt3.classList.add("tm_list_active");
            bt2.classList.remove("tm_list_active");
            bt1.classList.remove("tm_list_active");
          }
            else if (c.style.display == "block") {
              c.style.display = "none";
              a.style.display = "block";
              bt3.classList.add("tm_list_active");
              bt2.classList.remove("tm_list_active");
              bt1.classList.remove("tm_list_active");
        	  }
            };
            window.onload = function onclick() {
              let bt2 = document.getElementById("bt2");
              let bt1 = document.getElementById("bt1");
              let bt3 = document.getElementById("bt3");
              document.getElementById('bt1').click();
              bt1.classList.add("tm_list_active");
              bt2.classList.remove("tm_list_active");
              bt3.classList.remove("tm_list_active");
            };
