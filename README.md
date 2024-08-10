# Modified React Password Generator

     This Password generator is a better version enhanced with tailwindcss and also used useCallback Hook for better optimization.
     
## Hooks used:
    useState()
    useEffect()
    useRef()
    useCallback()

## Explanation:
    A password is generated using Math.random() function.
    string.charAt(Math.floor(Math.random()*string.length))

    There are options for changing the size of password and also for including numbers and strings in the password.
    Hooks are used for storing the options and also for storing the actual password.
    Then that password is displayed in the p tag of html.
