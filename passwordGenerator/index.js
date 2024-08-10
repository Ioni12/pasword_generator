const inpt = document.getElementById("inpt");
        const btn = document.getElementById("btn");
        const length = 12;

        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrtuvwxyz";
        const number = "0123456789";
        const symbol = "~!@#%$^^&*(_+/*?><)[]";
        const all = upper + lower + number + symbol;

        function create()
        {
            let password = "";
            password += upper[Math.floor(Math.random() * upper.length)];
            password += lower[Math.floor(Math.random() * lower.length)];
            password += number[Math.floor(Math.random() * number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];

            while(length > password.length){
                password += all[Math.floor(Math.random() * all.length)];
            }
            inpt.value = password;
        }