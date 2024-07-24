import { IEpisode } from "../interfaces/episode.interface";
import { ILocation } from "../interfaces/location.interface";

//creamos un tipo para poder reutilizar la tabla y poder decirle que coja los datos de una u otra
export type TableData = IEpisode | ILocation;