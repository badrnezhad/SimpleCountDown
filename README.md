# SimpleCountDown
Simple jQuery Count Down


This is a count down that written by jquey.

<img src="pastedImage.png" align="center"/> 

## How to use?

### I) Add `jquery.min`, style and mani javascript file in `head`.
```
<head>
  ...
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="simpleCountDown.css">
    <script src="simpleCountDown.js"></script>
  ...
</head>
```

### II) Add a div like this : (pay attention to the id)
```
<div id="CountDownTimerMain"></div>
```

### III) Call main method

```
<script>
    $(document).ready(() => {
        SimpleCountDown("CountDownTimerMain", {number: 10});
    });
</script>
```

