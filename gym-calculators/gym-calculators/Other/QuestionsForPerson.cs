namespace gym_calculators.Other
{
    internal static class QuestionsForPerson
    {
        private static T ConvertTypeForQuestion<T>(this object value)
        {
            return (T)Convert.ChangeType(value, typeof(T));
        }

        public static T QuestionForPerson<T>(string txt)
        {
            Console.Write($"{txt}: ");
            T x = ConvertTypeForQuestion<T>(Console.ReadLine());
            return x;
        }
    }
}
