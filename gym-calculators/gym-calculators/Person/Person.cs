namespace gym_calculators.Person
{
    internal class Person
    {
        public Person(byte age, float weight, byte growth)
        {
            Age = age;
            Weight = weight;
            Growth = growth;
        }
        public byte Age { get; private set; }
        public float Weight { get; private set; }
        public byte Growth { get; private set; }
    }
}
