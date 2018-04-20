document.addEventListener("DOMContentLoaded", function() {

  // SLIDER:
  var slider = document.getElementsByClassName('slider')
  var nextBtn = document.getElementById('nextBtn');
  var prevBtn = document.getElementById('prevBtn');
  var imagesSl = document.querySelectorAll('.slider li')
  var visibleImg = 0;
  imagesSl[visibleImg].classList.add('visible');



  function nextImg() {
    if(visibleImg < imagesSl.length - 1) {
      imagesSl[visibleImg].classList.remove('visible');
      visibleImg++;
      imagesSl[visibleImg].classList.add('visible');
    };
  };

  function prevImg() {
    if(visibleImg > 0) {
      imagesSl[visibleImg].classList.remove('visible');
      visibleImg--;
      imagesSl[visibleImg].classList.add('visible');
    }
  };

  nextBtn.addEventListener("click", nextImg);
  prevBtn.addEventListener("click", prevImg);


  //GALLERY


  var imagesGal = document.querySelectorAll('.gallery img');

  function showFullScreen() {
    var body = document.querySelector('body');
    var fullScreen = document.createElement("div");
    var source = this.getAttribute("src");
    var newImage = document.createElement("img");
    var closeBtn = document.createElement("button");

    newImage.setAttribute("src", source)
    fullScreen.classList.add("fullScreen");
    closeBtn.classList.add("close");
    closeBtn.innerText = "X";
    body.appendChild(fullScreen);
    fullScreen.appendChild(newImage);
    fullScreen.appendChild(closeBtn);
    closeBtn.addEventListener("click", function() {
      body.removeChild(fullScreen);
    })
  };

  for(var i = 0; i < imagesGal.length; i++) {
    imagesGal[i].addEventListener("click", showFullScreen);
  };

  // GALLERY WITH filter

  var imagesFil = document.querySelectorAll('.filter li');
  var buttonsFil = document.querySelectorAll('.filter button');

  for(var i = 0; i < buttonsFil.length; i++) {
    buttonsFil[i].addEventListener("click", filterImages);
  };


  function filterImages() {
    var button = this.id;

    if(button === "all") {
      for(var i = 0; i < imagesFil.length; i++) {
        imagesFil[i].classList.remove("invisible");

      }
    } else {
      for(var i = 0; i < imagesFil.length; i++) {
        var topic = imagesFil[i].dataset.topic;

        if(topic.indexOf(button) > -1) {
          imagesFil[i].classList.remove("invisible");

        } else {
          imagesFil[i].classList.add("invisible");

        }
      }
    }
  };

  //TOOLTIPS

  var tooltips = document.getElementsByClassName('tooltip');
  for(var i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener("mouseenter", showTooltip);
    tooltips[i].addEventListener("mouseout", hideTooltip);
  };

  function showTooltip() {
    var tooltip = document.createElement("span");
    var tooltipText = this.dataset.text;
    tooltip.classList.add('show');
    tooltip.innerText = tooltipText;
    this.appendChild(tooltip);

  };

  function hideTooltip() {
    var child = this.firstElementChild;
    this.removeChild(child);
  };

  //TO DO LIST;
  var t = document.getElementById('todoInput');


  var todoBtn = document.getElementById('todoBtn');
  var removeItems = document.getElementById('removeItems');
  var todoList = document.querySelector('.todo ul');
  todoBtn.addEventListener("click", addTask);
  removeItems.addEventListener("click", removeAll);

  function removeAll() {

    if(todoList.hasChildNodes) {
      todoList.innerText = '';
      showRemove();
    };

  }

  function showRemove() {

    if(todoList.children.length > 0) {

      removeItems.classList.add('visible');
    } else {
      removeItems.classList.remove('visible');

    }
  }

  function addTask() {

    var cpl = document.createElement('button');
    cpl.innerText = 'COMPLETE';
    var del = document.createElement('button');
    del.innerText = "DELETE";
    var task = t.value;
    var newTask = document.createElement('li');
    newTask.innerText = task;
    newTask.appendChild(cpl);
    newTask.appendChild(del);
    cpl.addEventListener('click', cplTask);
    del.addEventListener('click', delTask)
    // todoList.firstElementChild.insertBefore(newTask);
    todoList.appendChild(newTask);
    // console.log(task);
    t.value = null;
    showRemove();
  };

  function cplTask() {
    this.parentElement.style.backgroundColor = "green";
  };

  function delTask() {
    todoList.removeChild(this.parentElement);
    showRemove();
  }


})
