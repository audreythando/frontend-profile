import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

interface FormInputs {
  fullName: string
  nickName: string
  dateOfBirth: number
  email:string
  gender:string
  value: string | number | string[];
}

export default function UserProfile() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  console.log("errors");

  const submit = (data: FormInputs) => {
    console.log(data);

    reset();
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D">
            <Text>Fill Your Profile</Text>
          </Ionicons>
        </View>
        <View style={{ alignSelf: "center", margin: 15 }}>
          <View style={styles.profileImage}>
            <Image source={require("../assets/dp.jpg")}></Image>
          </View>
          <View style={styles.add}>
            <Ionicons
              name="ios-pencil"
              size={34}
              color="#DFD8C8"
              style={{ marginTop: 6, marginLeft: 2 }}
            ></Ionicons>
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextInput
                  placeholder="Full Name"
                  style={styles.input}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />

                {error && <Text style={{ color: "red" }}>{error.message}</Text>}
              </>
            )}
            rules={{
              required: "Field is required",
              minLength: 8,
              maxLength: 20,
            }}
          />

          <Controller
            control={control}
            name="nickName"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextInput
                  value={value}
                  placeholder="Nickname"
                  style={styles.input}
                  onChangeText={(value) => onChange(value)}
                />
                {error && <Text style={{ color: "red" }}>{error.message}</Text>}
              </>
            )}
            rules={{ required: "Field is required" }}
          />

          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextInput
                  placeholder="Date of birth"
                  style={styles.input}
                  onChangeText={(value) => onChange(value)}
                />
                {error && <Text style={{ color: "red" }}>{error.message}</Text>}
              </>
            )}
            rules={{ required: "Field is required" }}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextInput
                  value={value}
                  placeholder="Email"
                  style={styles.input}
                  onChangeText={(value) => onChange(value)}
                />
                {error && <Text style={{ color: "red" }}>{error.message}</Text>}
              </>
            )}
            rules={{ required: "Field is required" }}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextInput
                  value={value}
                  placeholder="Gender"
                  style={styles.input}
                  onChangeText={(value) => onChange(value)}
                />
                {error && <Text style={{ color: "red" }}>{error.message}</Text>}
              </>
            )}
            rules={{ required: "Field is required" }}
          />

          <TouchableOpacity onPress={handleSubmit(submit)}>
            <Text style={styles.button}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  input: {
    fontSize: 12,
    borderWidth: 0.3,
    padding: 12,
    width: "90%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 20,
    marginBottom: 16,
    marginTop: 16,
  },
  button: {
    fontSize: 20,
    color: "white",
    width: 160,
    marginTop: 8,
    borderRadius: 25,
    backgroundColor: "blue",
    padding: 8,
    textAlign: "center",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "blue",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
