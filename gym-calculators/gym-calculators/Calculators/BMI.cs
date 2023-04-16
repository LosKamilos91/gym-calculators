namespace gym_calculators.Calculators
{
    internal class BMI
    {
        public BMI(Person.Person person)
        {
            PersonBMI = person.Weight / (person.Growth / 100f * person.Growth / 100f);
        }

        public float PersonBMI { get; private set; }
    }
}
