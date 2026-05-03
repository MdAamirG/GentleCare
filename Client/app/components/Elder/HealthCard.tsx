import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

interface HealthCardProps {
  title: string;
  value: string;
  unit: string;
  icon: string;
  color: string;
}

export default function HealthCard({ title, value, unit, icon, color }: HealthCardProps) {
  // Generate a soft gradient based on the theme color
  const gradientColors = [color, color + "CC"]; // CC is ~80% opacity

  return (
    <Surface style={styles.surface} elevation={2}>
      <LinearGradient
        colors={[color + "15", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.cardContent}>
          <View style={[styles.iconContainer, { backgroundColor: color + "20" }]}>
            <MaterialCommunityIcons name={icon as any} size={28} color={color} />
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.valueRow}>
              <Text style={[styles.value, { color }]}>{value}</Text>
              <Text style={styles.unit}>{unit}</Text>
            </View>
          </View>

          <MaterialCommunityIcons 
            name="chevron-right" 
            size={24} 
            color="#CCC" 
            style={styles.chevron}
          />
        </View>
      </LinearGradient>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
  card: {
    padding: 16,
    borderRadius: 16,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#666",
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  value: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    marginRight: 4,
  },
  unit: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#999",
  },
  chevron: {
    marginLeft: 8,
  }
});
