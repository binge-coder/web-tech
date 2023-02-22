function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
    var parentContainer = document.getElementById("colors");
    for(var i = 0; i < colors.length; i++ )
    {
        var colorBlock = document.createElement("div");
        colorBlock.className = "choice";
        colorBlock.style.backgroundColor = colors[i];

        // colorBlock.addEventListener("click", function() {
        //     var selected = document.getElementById("selected");
        //     selected.textContent = colors[i];
        //     selected.style.backgroundColor = colors[i];
        // });
        colorBlock.addEventListener("click", (function (color) {
            return function () {
                var selected = document.getElementById("selected");
                selected.textContent = color;
                selected.style.backgroundColor = color;
            };
        })(colors[i]));

        parentContainer.appendChild(colorBlock);
    }

}

window.onload = function () {
    initGrid();
}
