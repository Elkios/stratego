import { Move, AvailableMoves, create as moveCreate } from './move';

export interface Piece {
    move: Move,
    rank: PieceType,
    color: Color
}

export enum Color {
    None = -1,
    Red = 0,
    Blue = 1
}

export enum PieceType {
    Null = -10,
    Bomb = -2,
    Marshal = 10,
    General = 9,
    Colonel = 8,
    Major = 7,
    Captain = 6,
    Lieutenant = 5,
    Sergeant = 4,
    Miner = 3,
    Scout = 2,
    Spy = 1,
    Flag = -1
}

export function create(type: PieceType, color: Color): Piece {
    switch (type) {
        case PieceType.Null:
            return {
                move: moveCreate(AvailableMoves.Immovable),
                rank: PieceType.Null,
                color
            };
        case PieceType.Bomb:
            return {
                move: moveCreate(AvailableMoves.Immovable),
                rank: PieceType.Bomb,
                color
            };
        case PieceType.Marshal:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Marshal,
                color
            };
        case PieceType.General:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.General,
                color
            };
        case PieceType.Colonel:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Colonel,
                color
            };
        case PieceType.Major:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Major,
                color
            };
        case PieceType.Captain:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Captain,
                color
            };
        case PieceType.Lieutenant:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Lieutenant,
                color
            };
        case PieceType.Sergeant:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Sergeant,
                color
            };
        case PieceType.Miner:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Miner,
                color
            };
        case PieceType.Scout:
            return {
                move: moveCreate(AvailableMoves.Scout),
                rank: PieceType.Scout,
                color
            };
        case PieceType.Spy:
            return {
                move: moveCreate(AvailableMoves.Normal),
                rank: PieceType.Spy,
                color
            };
        case PieceType.Flag:
            return {
                move: moveCreate(AvailableMoves.Immovable),
                rank: PieceType.Flag,
                color
            };
    }
}

export function display(p: Piece): string {
    let msg = " R";
    if (p.color === Color.Blue) {
        msg = " B";
    }
    switch (p.rank) {
        case PieceType.Null:
            return "   " + msg;
        case PieceType.Bomb:
            return " B " + msg;
        case PieceType.Marshal:
            return "Mar" + msg;
        case PieceType.General:
            return " G " + msg;
        case PieceType.Colonel:
            return "Col" + msg;
        case PieceType.Major:
            return "Maj" + msg;
        case PieceType.Captain:
            return "Capt" + msg;
        case PieceType.Lieutenant:
            return " L " + msg;
        case PieceType.Sergeant:
            return "Ser" + msg;
        case PieceType.Miner:
            return "Min" + msg;
        case PieceType.Scout:
            return "Sco" + msg;
        case PieceType.Spy:
            return "Spy" + msg;
        case PieceType.Flag:
            return " F " + msg;
    }
}
