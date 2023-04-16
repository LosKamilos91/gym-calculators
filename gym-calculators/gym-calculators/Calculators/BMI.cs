namespace gym_calculators.Calculators
{
    internal class BMI
    {
        public BMI(Person.Person person)
        {
            PersonBMI = person.Weight / (person.Growth / 100f * person.Growth / 100f);
        }

        public float PersonBMI { get; private set; }

        public string ResultPersonBMI()
        {
            if (PersonBMI >= 40)
            {
                return "Otyłość skrajna";
            }
            else if (PersonBMI >= 35 && 39.99 > PersonBMI)
            {
                return "II stopień otyłości";
            }
            else if (PersonBMI >= 30 && 34.99 > PersonBMI)
            {
                return "I stopień otyłości";
            }
            else if (PersonBMI >= 25 && 29.99 > PersonBMI)
            {
                return "nadwaga";
            }
            else if (PersonBMI >= 18.5 && 24.99 > PersonBMI)
            {
                return "wartośc prawidłowa";
            }
            else if (PersonBMI >= 17 && 18.49 > PersonBMI)
            {
                return "niedowaga";
            }
            else if (PersonBMI >= 16 && 16.99 > PersonBMI)
            {
                return "wychudzenie";
            }
            else
                return "Wygłodzenie";
        }
    }
}
