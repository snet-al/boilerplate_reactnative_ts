# App

# Local Development

## Install Dependencies

### For Android/iOS

- Run `yarn`

## Install Cocoapod libraries

### For iOS

- Run cd ios && pod install
## Running The Application

### For iOS

#### `yarn ios`

Runs metro bundler and opens the `Dev` app in the iOS simulator. Use this for testing
react-native components.

### For Android

#### `yarn and`

Runs metro bundler and opens the `Dev` app in the android simulator. Use this for testing
react-native components.

#### `yarn start`

Runs metro bundler to test changes in the context of a debug build of tca-ios or
tca-android. Running this command is required for testing react-native features
when running tca-ios or tca-android in the simulator/emulator.

### Other Commands

See `package.json` for other available commands in the `scripts` section

## Testing

### Unit Tests

#### `yarn test:unit`

Runs jest unit tests.

## Creating components
 - Create component using command: `yarn plop component`
 - Create screen using command: `yarn plop screen`

## Stylings
 - Do not add inline stylings
 - Use a separated file for styling
 - Do not use colors value in stylings. Instead use variable colors.

## Committing/pushing
 - All commit messages should follow [The Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
 - Do not commit code with errors or know bugs.
 - If something need to be improved later add a todo comment: `// TODO: <Known problem description> `

 ## Variables naming convention

| Var type                               | Convention                 | Example                   |
|:---------------------------------------|:---------------------------|:--------------------------|
|  normal variable                       | snake_case                 |  boats_list               |
|  function/css style                    | camelCase                  |  getBoatsList             |
|  component/class/interface             | UppedCamelCase             |  BoatDetailsProps         |
|  folder name                           | kebab-case                 |  boat-images              |
|  actions/constant keys                 | CONSTANT_CASE              |  GET_BP_LIST              |
-----------------