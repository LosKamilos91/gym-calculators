﻿using gym_calculators.Calculators;
using gym_calculators.MainMenu;
using gym_calculators.Other;
using gym_calculators.Person;

int minimumValueForAge = 10;
int minimumValueForWeight = 30;
int minimumValueForGrowth = 100;
Menu menu = new Menu("Hi! Let's first we need few information about you.");
var age = QuestionsForPerson.QuestionForPerson<byte>("Age");
while (age < minimumValueForAge || byte.MaxValue - 155 < age)
{
    Console.WriteLine($"Wrong value ({minimumValueForAge} - {byte.MaxValue - 155}). Try Again! ");
    age = QuestionsForPerson.QuestionForPerson<byte>("Age");
}
var weight = QuestionsForPerson.QuestionForPerson<byte>("Weight");
while (weight < minimumValueForWeight || 200 < weight)
{
    Console.WriteLine($"Wrong value ({minimumValueForWeight} - 200). Try Again! ");
    weight = QuestionsForPerson.QuestionForPerson<byte>("Weight");
}
var growth = QuestionsForPerson.QuestionForPerson<byte>("Growth");
while (growth < minimumValueForGrowth || byte.MaxValue < growth)
{
    Console.WriteLine($"Wrong value ({minimumValueForGrowth} - {byte.MaxValue}). Try Again! ");
    growth = QuestionsForPerson.QuestionForPerson<byte>("Growth");
}
Person person = new Person(age, weight, growth);
Console.WriteLine("Ok. Everythink looks good.");
//Calculators
BMI bmi = new BMI(person);
//Result
Console.WriteLine();
Console.WriteLine($"Your BMI: {bmi.PersonBMI:F2} ({bmi.ResultPersonBMI()})");