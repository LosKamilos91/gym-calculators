# Gym Calculator App ![image](https://geps.dev/progress/25)

An app designed to help gym-goers track their progress, offering useful calculations such as:

1. **BMI** (Body Mass Index)
   It helps users determine their body mass index based on height and weight, classifying them into categories such as underweight, normal weight, overweight, or obesity level.

**Features**

-   Easy commands where you can enter the relevant data;
-   Immediate calculation results;
-   Relevant messages to understand the command;
-   Suitable for anyone who trains at the gym;

The application is implemented in JavaScript and can be easily extended to include more workout-related calculations.

## Install

**Step 1**: Clone the repository:

**SSH**

```
git@github.com:LosKamilos91/gym-calculators.git
```

**HTTPS**

```
https://github.com/LosKamilos91/gym-calculators.git
```

**Step 2**: Open a terminal and use the command:

```
npm init -y
```

**Additional Information**:

Define an alias for `.bashrc` or `.zshrc` for quick use of commands

## Commands

Below are all available commands

### BMI

-   `<bodyWeight>` in kilograms
-   `<growth>` in centimeters

**Node.js**

```
node features/bmi.js <bodyWeight> <growth>
```

**Npm**

```
npm run bmi <bodyWeight> <growth>
```

**Alias**

```
bmi <bodyWeight> <growth>
```

## Aliases

To use commands easily, it is a good idea to create aliases. Use the instructions below to create aliases. Open a `.bashrc` or `.zshrc` file in a text editor:

-   You can use `nano`, `vim`, or any other editor you prefer. Here is an example using `nano`:

**.bashrc**

```
nano ~/.bashrc
```

**.zshrc**

```
nano ~/.zshrc
```

Add the below aliases to the end of the .bashrc or .zshrc file.

<table>
  <th>Name</th>
  <th>Code</th>
  <tr align="center">
    <td>BMI</td>
    <td ><code>alias bmi='node .../features/bmi.js'</code></td>
  </tr>
</table>

If you are using `nano`, save the file by pressing `CTRL + O` and then `Enter`. Close the editor by pressing `CTRL + X`.

Load the changes into `.bashrc` to load new aliases without restarting the terminal, type:

```
source ~/.bashrc
```

### Done!

Now you can use aliases in the terminal.
