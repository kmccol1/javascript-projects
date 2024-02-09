
let launchcode = {
    organization:"nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees:100,
    programsOffered:["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(n)
    {
        let result = "";
        if ( n % 2 == 0)
        {
            if (n %3==0)
            {
                if ( n %5 == 0)
                {
                    result = "LaunchCode Rocks!";
                }
                else
                {
                    result = "LaunchCode!";
                }
            }
            else if ( n % 5 ==0)
            {
                result = "Launch Rocks! (CRASH!!!!)";
            }
            else
            {
                result = "Launch!";
            }

        }
        else if ( n % 3 == 0 )
        {
            if (n %5==0)
            {
                result = "Code Rocks!";
            }
            else
            {
                result = "Code!";
            }
        }
        else if ( n % 5 == 0 )
        {
            result = "Rocks!";
        }
        else
        {
            result = "Rutabagas! That doesn't work.";
        }
        return result;
    }
};

module.exports = launchcode;

