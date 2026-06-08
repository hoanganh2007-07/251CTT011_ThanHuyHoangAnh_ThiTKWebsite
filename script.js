function xemMonHoc(ten, tiendo){
    document.getElementById("chonMon").innerHTML = `
        <h3>MÔN HỌC ĐANG CHỌN</h3>
        <p><b>Tên môn học:</b> ${ten}</p>
        <p><b>Tiến độ:</b> ${tiendo}</p>
    `;
}

const menu = document.querySelectorAll(".menu li");

menu.forEach(item=>{
    item.addEventListener("click",function(){
        menu.forEach(i=>i.classList.remove("active"));
        this.classList.add("active");
    });
});

window.onload = function(){
    let mssv = "22123456";
    let soCuoi = parseInt(mssv.slice(-1));

    let grid = document.querySelector(".course-container");

    if(soCuoi % 2 === 0){
        grid.style.gridTemplateColumns = "repeat(3,1fr)";
    }else{
        grid.style.gridTemplateColumns = "repeat(2,1fr)";
    }
};
