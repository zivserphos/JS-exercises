function guessCity(capital, coastal, famous, ancient)
{
    if (capital && famous && ancient && !coastal)
        return "Jerusalem";
    if (famous && coastal && !ancient && !capital)
        return "Tel-Aviv";
    if (ancient && !capital && !coastal && !famous)
        {
            return "Katzerin"
        }
    if (ancient && coastal && !capital && !famous)
        {
            return "Acre"
        }
    if (coastal && !ancient && !capital && !famous)
    {
        return "Zikim";
    }
        return "Musmus";
}

console.log(guessCity(true, false, true, true));
