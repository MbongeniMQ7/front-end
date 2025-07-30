import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 5,
  },
  sliderContainer: {
    height: 300,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 20,
  },
  formSlider: {
  flexDirection: 'row',
  marginBottom: 20,
  paddingRight: screenWidth,
},
  form: {
    width: screenWidth - 40,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    marginHorizontal: 11,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#2879f2ff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#fff',
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2879f2ff',
  },
  googleButtonText: {
    color: '#2879f2ff',
    fontWeight: 'bold',
  },
  toggleText: {
    textAlign: 'center',
    marginTop: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
