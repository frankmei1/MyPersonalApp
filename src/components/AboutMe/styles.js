import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: '100%',
    height: '100%'
  },
  header: {
    backgroundColor: "white",
    height: 140,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 10
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
  },
  bodyContent: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flex: 1,
    width: '95%',

    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  subscribe: {
    fontSize: 20,
    color: "gray",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
    alignItems: 'center',

  },
  major: {
    fontSize: 16,
    color: "#5f9ea0",
    marginTop: 10
  },
  school: {
    fontSize: 16,
    color: '#6495ed',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  socialIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  scene: {
    flex: 1,
  },
  scrollView: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  itemcontainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20
  },
  movie: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flex: 1,
    width: '95%',
    flex: 1
  },
  name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  photo: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  info: {
    marginTop: 3,
    marginBottom: 5
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    margin: 10,

  },
  Addcontainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  }
});

export default styles;
