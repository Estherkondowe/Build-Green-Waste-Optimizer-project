const bins =[
    {id:"Bin 1", level:80},
    {id:"Bin 2", level: 30},
    {id:"Bin 3", level:100},
    {id:"Bin 4", level:55}
];
function getStatusColor(level){
    if(level >=80) return"#e53935";
    if(level >=50) return"#fdd835";
    return"#43a047";
}
function display(){
    const container =document.getElementById("bin-status");
    bins.forEach(bin=>{
        const card =document.createElement("div");
        card.className="card";
        card.style.borderLeft =`10px solid ${getStatusColor(bin.level)}`;
        card.innerHTML=`
        <h3>${bin.id}</h3>
        <p>Fill Level: ${bin.level}%</p>`;
        container.appendChild(card);
    });

}
window.onload=displayBins;

