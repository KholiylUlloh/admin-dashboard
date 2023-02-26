import { ReactComponent as CheckCircle } from "../../assets/icons/check-circle.svg";
import { ReactComponent as Products } from "../../assets/icons/archive.svg";
import { ReactComponent as Layers } from "../../assets/icons/layers.svg";
import { ReactComponent as MapPin } from "../../assets/icons/map-pin.svg";
import { ReactComponent as Clients } from "../../assets/icons/users.svg";
import { ReactComponent as Chart } from "../../assets/icons/chart.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";

export const navigation = [
  { id: 1, linkName: "Buyurtmalar", path: "orders", icon: <CheckCircle /> },
  { id: 2, linkName: "Maxsulotlar", path: "products", icon: <Products /> },
  { id: 3, linkName: "Kategoriyalar", path: "categories", icon: <Layers /> },
  { id: 4, linkName: "Filiallar", path: "branches", icon: <MapPin /> },
  {
    id: 5,
    linkName: "Mijozlar",
    path: "clients",
    icon: <Clients />,
  },
  { id: 6, linkName: "Xisobot", path: "report", icon: <Chart /> },
  { id: 7, linkName: "Katalog", path: "catalog", icon: <Settings /> },
];
