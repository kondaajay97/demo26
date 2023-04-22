function collofimage()
{
    var allimagetag=document.images;
    for(i=0;i<allimagetag.length;i++)
    {
           allimagetag[i].src=`${i}.jpg`
    }
}
collofimage()

function bigwindow(imgUrl)
{
    document.getElementById("imgcontainer").style.backgroundImage=`url(${imgUrl})`
}