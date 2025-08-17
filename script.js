
        let btn1 = document.getElementById("button1");
        let btn2 = document.getElementById("button2");
        let copycode = document.querySelector(".copycode");
        let rgb1 = "#DDBE55"; // Initial color for button 1
        let rgb2 = "#D83D19"; // Initial color for button 2 

        const changecolor = () => {
            let hexvalues = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += hexvalues[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        const handlebutton1 = () => {
            rgb1 = changecolor();
            console.log(rgb1);
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            btn1.innerHTML = rgb1;
            copycode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;

        };

        const handlebutton2 = () => {
            rgb2 = changecolor();
            console.log(rgb2);
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            btn2.innerHTML = rgb2;
            copycode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;

        };

        copycode.addEventListener('click', () => {
            navigator.clipboard.writeText(copycode.innerHTML)
        });

        btn1.addEventListener('click', handlebutton1);
        btn2.addEventListener('click', handlebutton2);
  