import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { Person, Work, Mail, Phone, LocationOn } from '@mui/icons-material';

export const ProfileData = ({graphData}) => {
    return (
        <List className="profileData">
            <NameListItem name={graphData.displayName} />
            <JobTitleListItem jobTitle={graphData.jobTitle} />
            <MailListItem mail={graphData.mail} />
            <PhoneListItem phone={graphData.businessPhones[0]} /> 
            <LocationListItem location={graphData.officeLocation} />
            <PhotoListItem location={graphData.photo} />
        </List>
    );
};

const NameListItem = ({name}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <Person />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={name}/>
    </ListItem>
);

const JobTitleListItem = ({jobTitle}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <Work />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Title" secondary={jobTitle}/>
    </ListItem>
);

const MailListItem = ({mail}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <Mail />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mail" secondary={mail}/>
    </ListItem>
);

const PhoneListItem = ({phone}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <Phone />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary={phone}/>
    </ListItem>
);

const LocationListItem = ({location}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <LocationOn />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary={location}/>
    </ListItem>
);

const PhotoListItem = ({location}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar src={location}>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photo" />
    </ListItem>
);