Hela portfoliot är uppbyggt med ett ljust och ett mörkt tema med hjälp av redux. Något som användaren kan alltid skifta mellan spelar ingen roll vart på sidan de befinner sig på. Webbsidan är utformad på ett sätt så att användaren kan enkelt hitta till info den letar efter.

På första sidan är tanken att användaren ska direkt kunna sett mitt namn och det jag sysslar med. Jag har dessutom mina projekt på första sidan så att användaren inte behöver leta runt webbsidan för att hitta min projekt och har de lätt tillgängligt. Mina projekt är framtagna från ett github api som frekvent uppdaterar varje gång jag skapar ett nytt offentligt repo på github.

Sedan på andra sidan hittar man information om mig. Områden som jag har arbetat med, mina kunskaper och erfarenheter. 

I min kontakt sida så jag har använt mig av tre olika hooks. Först useState för att spara innehållet användaren skriver input.
Andra useEffect för att kontrollera så att användaren skriver ett befinligt mailadress och inte ett som saknar tecken som är typiska för mailadress.
Tredje useRef för att automatiskt vara klickad på fullname så att användaren kan direkt skriva utan att behöva klicka på textrutan.