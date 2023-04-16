namespace gym_calculators.Other
{
    internal static class QuestionsForPerson
    {
        
        private static T ConvertTypeForQuestion<T>(this object value)
        {
            bool error = true;
            while (error)
            {
                try
                {
                    return (T)Convert.ChangeType(value, typeof(T));
                }
                catch (InvalidCastException invalidEx)
                {
                    Console.WriteLine(invalidEx);
                    error = false;
                }
                catch (FormatException formatEx)
                {
                    Console.WriteLine(formatEx);
                    error = false;
                }
                catch (OverflowException overEx)
                {
                    Console.WriteLine(overEx);
                    error= false;
                }
                catch (ArgumentNullException argumentEx)
                {
                    Console.WriteLine(argumentEx);
                    error= false;
                }
            }
            return default(T);
        }

        public static T QuestionForPerson<T>(string questionText)
        {
            try
            {
                Console.Write($"{questionText}: ");
                T x = ConvertTypeForQuestion<T>(Console.ReadLine());
                return x;
            }
            catch (IOException ioEx)
            {
                Console.WriteLine(ioEx);
            }
            catch (OutOfMemoryException memoryEx)
            {
                Console.WriteLine(memoryEx);
            }
            catch (ArgumentOutOfRangeException rangeEx)
            {
                Console.WriteLine(rangeEx);
            }
            return default(T);
        }
    }
}
