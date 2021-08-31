function guessCity(capital, coastal, famous, ancient)
{
    if (capital && famous && ancient && coastal === false)
        return "Jerusalem";
    if (famous && coastal && ancient === false && capital === false)
        return "Tel-Aviv";
    if (ancient && capital === false && coastal === false && famous === false)
        {
            return "Katzerin"
        }
    if (ancient && coastal && capital === false && famous === false)
        {
            return "Acre"
        }
    if (coastal && ancient && capital && famous)
        return "Zikim"
    if (!coastal && !ancient && !capital && !famous)
            return "MusMus"

        return("You won the system");
}

console.log(guessCity(false, true, false, true));
