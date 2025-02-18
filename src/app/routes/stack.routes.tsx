import { MedicineContextProvider } from "@context/medicine_context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "@routes/drawer.routes";
import ConsultationsHeld from "@screens/ConsultationsHeld";
import DetailsConsultationsHeld from "@screens/DetailsConsultationsHeld";
import ExamsDetected from "@screens/ExamsDetected";
import ExamsHistory from "@screens/ExamsHistory";
import Glucose from "@screens/Glucose";
import IMC from "@screens/IMC";
import Language from "@screens/Language";
import ListConsultationsHeld from "@screens/ListConsultationsHeld";
import Medicines from "@screens/Medicines";
import NewMedicine from "@screens/NewMedicine";
import Notification from "@screens/Notification";
import Perfil from "@screens/Perfil";
import Pressure from "@screens/Pressure";
import Security from "@screens/Security";
import Settings from "@screens/Settings";
import Supervision from "@screens/Supervision";
import Suporte from "@screens/Suport";
import ExamCamera from "@screens/ExamCamera";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
                headerTitle: "",
                headerShown: false
            }}
        >
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Drawer" component={DrawerRoutes} />
            <Stack.Screen name="Pressure" component={Pressure} />
            <Stack.Screen name="Glucose" component={Glucose} />
            <Stack.Screen name="IMC" component={IMC} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Medicines" component={Medicines} />
            <Stack.Screen name="NewMedicine" component={NewMedicine} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="Supervision" component={Supervision} />
            <Stack.Screen name="Suport" component={Suporte} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen
                name="ConsultationsHeld"
                component={ConsultationsHeld}
            />
            <Stack.Screen
                name="ListConsultationsHeld"
                component={ListConsultationsHeld}
            />
            <Stack.Screen
                name="DetailsConsultationsHeld"
                component={DetailsConsultationsHeld}
            />
            <Stack.Screen name="ExamsHistory" component={ExamsHistory} />
            <Stack.Screen name="ExamCamera" component={ExamCamera} />
            <Stack.Screen name="ExamsDetected" component={ExamsDetected} />
        </Stack.Navigator>
    );
}
