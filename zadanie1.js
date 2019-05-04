function dodawanie()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    if ( a == "" || b == "" )
    {
        document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
    }
    else
    {
        a = parseFloat(a);
        b = parseFloat(b);
        
        var dodawanie = a+b;
        document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+dodawanie+".";
    }

    //alert(a);
    //console.log(a);
    //document.getElementById("wynik").innerHTML = a;
}

function odejmowanie()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    if ( a == "" || b == "" )
    {
        document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
    }
    else
    {
        a = parseFloat(a);
        b = parseFloat(b);
        
        var odejmowanie = a-b;
        document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+odejmowanie+".";
    }
}

function mnozenie()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    if ( a == "" || b == "" )
    {
        document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
    }
    else
    {
        a = parseFloat(a);
        b = parseFloat(b);
        
        var mnozenie = a*b;
        document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+mnozenie+".";
    }
}

function dzielenie()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    if ( a == "" || b == "" )
    {
        document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
    }
    else
    {
        a = parseFloat(a);
        b = parseFloat(b);
        
        if (b == 0)
        {
            document.getElementById("wynik").innerHTML = "Nie wolno dzielić przez zero.";
        }
        else
        {
            var dzielenie = a/b;
            document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+dzielenie+".";
        }
    }
}