import { ExerciseType } from "@/app/Type/exerciseType";

export const EXERCISE_FALLBACK: ExerciseType[] = [
  {
    id: 1,
    name: "Barbell Bench Press",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 30,
    caloriesBurned: 220,
    sets: 4,
    reps: "8-10",
    rating: 4.8,
    description: "A classic upper-body lift for building pressing strength and chest mass.",
    instructions: [
      "Set up on a flat bench with your feet firmly planted.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar until it touches the chest, then press upward.",
      "Keep your shoulders back and avoid flaring the elbows too much.",
    ],
  },
  {
    id: 2,
    name: "Deadlift",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    muscleGroups: ["Back", "Hamstrings", "Core"],
    equipment: "Barbell",
    difficulty: "Advanced",
    duration: 40,
    caloriesBurned: 280,
    sets: 5,
    reps: "5-8",
    rating: 4.9,
    description: "A foundational strength movement that builds posterior chain power and overall mass.",
    instructions: [
      "Stand with feet hip-width and the bar over midfoot.",
      "Brace your core and hinge at the hips.",
      "Keep the bar close to your body as you lift.",
      "Lock out the hips and lower under control.",
    ],
  },
  {
    id: 3,
    name: "Goblet Squat",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    muscleGroups: ["Glutes", "Quads", "Core"],
    equipment: "Kettlebell",
    difficulty: "Beginner",
    duration: 25,
    caloriesBurned: 180,
    sets: 3,
    reps: "10-12",
    rating: 4.7,
    description: "A squat variation that improves lower-body strength and core stability.",
    instructions: [
      "Hold a kettlebell close to your chest.",
      "Sit your hips back and descend into a squat.",
      "Drive through the midfoot to stand up tall.",
      "Brace your abs to prevent your torso from leaning forward.",
    ],
  },
];

export const getFallbackExerciseById = (id: number | string) =>
  EXERCISE_FALLBACK.find((item) => item.id === Number(id));
