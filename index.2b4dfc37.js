new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e()})}).then(function(){var e=document.createElement("div");e.classList.add("message"),e.innerText="Promise was resolved!",document.body.append(e)}),new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected"))},3e3)}).catch(function(){var e=document.createElement("div");e.classList.add("message","error-message"),e.innerText="Promise was rejected!",document.body.append(e)});
//# sourceMappingURL=index.2b4dfc37.js.map
