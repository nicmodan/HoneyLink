import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Button = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Pressable style={styles.button}>
      <Link href={to} style={styles.link}>
        {children}
      </Link>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    width: 250,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  link: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});