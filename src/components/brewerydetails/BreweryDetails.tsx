import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDetail } from "../../hook/useFetchDetail";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { List, ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LanguageIcon from "@mui/icons-material/Language";
import MapComponent from "../Map/Map";
import "./BreweryDetails.css";

export default function BreweryDetails() {
  const { id } = useParams();
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const { brewery, loading, error } = useFetchDetail(url);

  if (loading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  if (error) return <p>{error}</p>;
  return (
    <div className="container">
      <div>
        <h1>{brewery?.name}</h1>
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemIcon>
              <PhoneInTalkIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-wifi"
              primary={brewery?.phone}
            />
          </ListItem>
          {brewery?.website && (
            <ListItem>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-wifi"
                primary={brewery?.website}
              />
            </ListItem>
          )}
          <ListItem>
            <ListItemIcon>
              <PinDropIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-wifi"
              primary={`${brewery?.address_1}, ${brewery?.city}, ${brewery?.state}, ${brewery?.country}`}
            />
          </ListItem>
        </List>
        {brewery?.latitude && brewery?.longitude && (
          <MapComponent
            lat={Number(brewery?.latitude)}
            lng={Number(brewery?.longitude)}
          />
        )}
      </div>
    </div>
  );
}
