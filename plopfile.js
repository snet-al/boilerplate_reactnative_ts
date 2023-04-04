module.exports = function (plop) {
  plop.setGenerator('screen', {
    description: 'Creates application screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name: ',
      },
    ],
    actions: function (data) {
      let destination = 'src/screens/{{properCase name}}';

      return [
        {
          type: 'addMany',
          destination: destination,
          templateFiles: 'plop-templates/screens/*.hbs',
          base: 'plop-templates/screens',
          stripExtensions: ['hbs'],
        },
      ];
    },
  });

  plop.setGenerator('component', {
    description: 'Creates application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
    ],
    actions: function () {
      const destination = 'src/components/{{properCase name}}';

      return [
        {
          type: 'addMany',
          destination: destination,
          templateFiles: 'plop-templates/component/*.hbs',
          base: 'plop-templates/component',
          stripExtensions: ['hbs'],
        },
      ];
    },
  });
  plop.setGenerator('form', {
    description: 'Creates application form',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Form name: ',
      },
    ],
    actions: function () {
      const destination = 'src/forms/{{properCase name}}';

      return [
        {
          type: 'addMany',
          destination: destination,
          templateFiles: 'plop-templates/forms/*.hbs',
          base: 'plop-templates/forms',
          stripExtensions: ['hbs'],
        },
      ];
    },
  });
};
