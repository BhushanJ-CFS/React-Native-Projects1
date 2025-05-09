
# React Native Components Collection
## Table of Contents
1. [App]
2. [Flatcards]
3. [Login]
4. [Product_Showcase_App]
5. [States]
6. [Scrollwith_Img]

## App

The `App.js` file is the entry point of this project. It serves as a container for various individual components that can be tested by simply uncommenting the corresponding section of the code. These components include:

## Flatcards
### Description
This component renders a set of cards where users can select topics of interest. Each card has a background color and icon representing the topic.Description:
The FlatCards section is a visually organized layout that displays a group of card-like components in a flat row or grid format. Each card can represent a product, category, or any quick info snippet. This section is ideal for showcasing multiple items side-by-side and allows for better visual categorization of content.

## Login
### Description
A simple login form where users can enter their credentials to sign in. If the fields are not filled, an alert is shown to ask users to fill both fields.

Features
Email and password input fields
Sign in button
Google Sign In button (simulated)
Forgot password and Sign Up options

## Product Showcase App
### Description
A product showcase application where users can browse products by category. Each product displays its name, category, and price. Clicking on a product opens a modal with more details about the product.

Features
Horizontal scrolling for categories.
List of products with detailed view in a modal.

## States
### Description
A simple demonstration of how to handle multiple state values with React Native using useState and useEffect. It updates and shows an alert whenever the state is changed.

Features
Two state variables count and data.
Alerts are triggered when either of the states is updated.
Buttons to update the states.

## Scrollwith_Img
### Description
This component shows several categories (Sports, Games, and Drawing) with horizontal scrolling. Each item in a category has an image, and clicking the item opens the corresponding Wikipedia page for that item.

Features
Horizontal scrolling of items.
Links to Wikipedia for each item.


## ScrollCards
### Description
This component displays a set of scrollable cards in a horizontal layout.
 Cards are swipeable, and can be customized to be clickable for navigation or display additional details.

### -------------------------Core React Native Concepts Covered----------------------------------------------------
## Component-Based Structure

Created functional components using function ComponentName() {} and export default.
## Hooks Usage
useState for managing input and UI state.
useEffect for side-effects on mount (in States example).
useRef for direct DOM-like access to TextInput.

## UI Elements from react-native
Used core components like View, Text, TextInput, TouchableOpacity, Pressable, Button, ScrollView, SafeAreaView.

## Styling with StyleSheet
Created and applied custom styles using StyleSheet.create.

## Event Handling
Button press, TextInput change, and Alert triggering on user actions.

## Conditional Rendering / Alerts
Simple conditional checks to validate input before showing an alert.

## Modular Reusability
You separated UI elements like <Userdata /> and modal-based components.

## Third-Party Libraries Integration
Used react-native-vector-icons/MaterialCommunityIcons.

## ScrollView
Implemented horizontal scrolling layout.
Nested Views & Layouts
Used flexDirection, margin, padding for proper layout.

## Additional 
Used secureTextEntry for password inputs.
Used Alert for native feedback.
Integrated onPress, onChangeText, and custom handlers cleanly.
Used SafeAreaView for iOS-safe screen padding.