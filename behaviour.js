const projects=document.getElementById('projects')
const figures=document.getElementsByClassName("fig-media")
const figure_prevs=document.getElementsByClassName("fig-prev")
const figure_nexts=document.getElementsByClassName("fig-next")
function gallery_prev() {
  projects.scrollBy({ 
    top: 0, // could be negative value
    left: -430, 
    behavior: 'smooth' 
  });
}
function gallery_next() {
  projects.scrollBy({ 
    top: 0, // could be negative value
    left: 430, 
    behavior: 'smooth' 
  });
}

let figslides=[]
for (let i=0;i<figures.length;++i) {
  figslides[i]=0
}
let figslidesmax=[]
for (let i=0;i<figures.length;++i) {
  figslidesmax[i]=figures[i].getElementsByTagName("*").length
}

function fig_next(fignum) {
  medias=figures[fignum].getElementsByTagName("*")
  for (let i=0;i<medias.length;++i) {
    medias[i].style.display="none"
  }
  if (figslidesmax[fignum]-1>figslides[fignum]) {
    figslides[fignum]+=1
  }
  else {
    figslides[fignum]=0
  }
  medias[figslides[fignum]].style.display="block"
}
function fig_prev(fignum) {
  medias=figures[fignum].getElementsByTagName("*")
  for (let i=0;i<medias.length;++i) {
    medias[i].style.display="none"
  }
  if (figslides[fignum]>0) {
    figslides[fignum]-=1
  } else {
    figslides[fignum]=figslidesmax[fignum]-1
  }
  medias[figslides[fignum]].style.display="block"
}
for (let i=0;i<figslides.length;++i) {
  fig_prev(i)
  fig_next(i) 
}